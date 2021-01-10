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
import { BottomTabParamList } from '../../types';

interface Form {
  type?: number
  document?: number
  date?: string
  phone?: number
  politic?: boolean
  message?: boolean
}

export interface Props {
  navigation: StackScreenProps<BottomTabParamList, 'TabHome'>
}
export interface State {
  width: number
  height: number
  form: Form
}
export default class TabHomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      form: {
        type: 2,
        document: undefined,
        date: '',
        phone: undefined,
        politic: false,
        message: false
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
        <StatusBar translucent={true} />
        <ScrollView
          style={{ flex: 1, paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined, paddingVertical: 40 }}
        >
          <TitleComponent
            title='Obtén tu '
            titlePrimary='seguro ahora'
            description='Ingresa los datos para comenzar'
          />
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
            <TextInputComponent
              placeholder='Celular'
              value={this.state.form.phone?.toString()}
              handleOnChangeText={(text: string) => {
                let form = this.state.form
                let filter = text.toString().match(/^[0-9]{0,9}/)
                if (filter) {
                  form.phone = filter
                  this.setState({ form })
                }
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <SwitchItemComponent
              title='Acepto la '
              data={[
                {
                  link: 'https://www.linkedin.com/in/binni-zenobio-cordova-leandro-a77000175/',
                  title: 'Política de Protección de Datos Personales y los Términos y Condiciones.'
                }
              ]}
              value={this.state.form.politic}
              handleOnValueChange={(value: boolean) => {
                let form = this.state.form
                form.politic = value
                this.setState({ form })
              }}
            />
          </View>
          <View style={styles.rowWrapper}>
            <SwitchItemComponent
              title='Acepto la '
              data={[
                {
                  link: 'https://www.linkedin.com/in/binni-zenobio-cordova-leandro-a77000175/',
                  title: 'Política de Envío de Comunicaciones Comerciales.'
                }
              ]}
              value={this.state.form.message}
              handleOnValueChange={(value: boolean) => {
                let form = this.state.form
                form.message = value
                this.setState({ form })
              }}
            />
          </View>
        </ScrollView>
        <View style={[styles.ButtonComponentWrapper, { paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined }]}>
          <ButtonComponent
            title='COMENCEMOS'
            handleOnPress={() => {
              this.props.navigation.navigate('TabOne');
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
    flexDirection: 'row',
    paddingTop: 16
  }
})
