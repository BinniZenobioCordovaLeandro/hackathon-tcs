import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View, TextInput, PickerSelect, StatusBar } from '../components/Themed'
import TitleComponent from "../components/TitleComponent";
import ButtonComponent from "../components/ButtonComponent";
import PickerComponent from "../components/PickerComponent";
import TextInputComponent from "../components/TextInputComponent";
import SwitchItemComponent from "../components/SwitchItemComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";
import RadioButtonComponent from "../components/RadioFormComponent";
import { BottomTabParamList } from '../../types';

interface Form {
  type?: number
  document?: number
  firstName?: string
  lastName?: string
  thirdName?: string
  date?: string
  gender?: number
  secure?: number
}

export interface Props {
  navigation: StackScreenProps<BottomTabParamList, 'TabHome'>
}
export interface State {
  width: number
  height: number
  form: Form
}

export default class TabOneScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      form: {
        type: 2,
        document: undefined,
        firstName: undefined,
        lastName: undefined,
        thirdName: undefined,
        date: undefined,
        gender: undefined,
        secure: undefined,
      },
    }
  }

  render() {
    return (
      <View
        style={[styles.container]}
        onLayout={(event) => {
          var { width, height } = event.nativeEvent.layout;
          if (!this.state.width) this.setState({ width, height })
        }}
      >
        <ScrollView
          style={{ paddingHorizontal: this.state.width ? this.state.width * 0.05 : 0, paddingVertical: 40 }}
        >
          <TitleComponent
            title='Hola, '
            titlePrimary='Pepito'
            description='Valida que los datos sean correctos'
          />
          <View style={styles.rowWrapper}>
            <TitleSectionComponent
              title='Datos personales del titular'
            />
          </View>
          <View style={styles.rowWrapper}>
            <PickerComponent
              key='type'
              styleContainer={{ width: 100 }}
              handleOnValueChange={(value: number) => {
                let form = this.state.form
                form.type = value
                this.setState({ form })
              }}
              value={this.state.form.type}
              items={[
                { label: 'DNI', value: 2 },
              ]}
            />
            <TextInputComponent
              key='document'
              placeholder='Nro de Documento'
              keyboardType='numeric'
              value={this.state.form.document?.toString()}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                let filter = text.toString().match(/^[0-9]{0,8}/)
                if (filter) {
                  form.document = filter
                  this.setState({ form })
                }
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TextInputComponent
              placeholder='Nombres'
              value={this.state.form.firstName}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                form.firstName = text
                this.setState({ form })
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TextInputComponent
              placeholder='Apellido Paterno'
              value={this.state.form.lastName}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                form.lastName = text
                this.setState({ form })
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TextInputComponent
              placeholder='Apellido Materno'
              value={this.state.form.thirdName}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                form.thirdName = text
                this.setState({ form })
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TextInputComponent
              key='date'
              placeholder='Fecha de nacimiento'
              value={this.state.form.date}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                if (text.length <= 10) {
                  if (/^[0-9]{4}/.test(text)) {
                    form.date = text.replace(/(\d)(?=(\d{2})+(?!\d))/g, "$1/")
                    this.setState({ form })
                  } else if (/^[0-9]{2}\/[0-9]{6}/.test(text)) {
                    form.date = text.replace(/(\d)(?=(\d{4})+(?!\d))/g, "$1/")
                    this.setState({ form })
                  } else {
                    form.date = text
                    this.setState({ form })
                  }
                }
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TitleSectionComponent
              title='Género'
            />
          </View>
          <View style={styles.columnWrapper}>
            <RadioButtonComponent
              title='Masculino'
              value={this.state.form.gender === 0}
              handleOnPress={() => {
                let form = this.state.form
                form.gender = 0
                this.setState({ form })
              }}
            />
            <RadioButtonComponent
              title='Femenino'
              value={this.state.form.gender === 1}
              handleOnPress={() => {
                let form = this.state.form
                form.gender = 1
                this.setState({ form })
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <TitleSectionComponent
              title='¿A quién vamos a asegurar?'
            />
          </View>
          <View style={styles.columnWrapper}>
            <View>
              <RadioButtonComponent
                title='Solo a mí'
                value={this.state.form.secure === 0}
                handleOnPress={() => {
                  let form = this.state.form
                  form.secure = 0
                  this.setState({ form })
                }}
              />
            </View>
            <View>
              <RadioButtonComponent
                title='A mí y a mi familia'
                value={this.state.form.secure === 1}
                handleOnPress={() => {
                  let form = this.state.form
                  form.secure = 1
                  this.setState({ form })
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.ButtonComponentWrapper, { paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined }]}>
          <ButtonComponent
            title='CONTINUAR'
            handleOnPress={() => {
              this.props.navigation.navigate('TabTwo');
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  ButtonComponentWrapper: {
    alignSelf: 'flex-start'
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16
  },
  columnWrapper: {
    flexDirection: 'column',
    paddingTop: 16
  }
})
