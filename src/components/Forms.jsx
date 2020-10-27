import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base';
import { setUserName, setAge, setEmail, resetState } from '../store/actions';

let { width, height, scale } = Dimensions.get("window");

const sharedState = state => ({
    sampleState: state.sampleState
})

const actions = dispatch => ({
    setUserName: userName => dispatch(setUserName(userName)),
    setAge: age => dispatch(setAge(age)),
    setEmail: email => dispatch(setEmail(email)),
    resetState: () => dispatch(resetState())
})

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                {/* ヘッダ */}
                <View style={styles.headerView}>
                    <View style={styles.headerPadding} />
                    <View style={styles.headerTitleView}>
                        <Text style={styles.headerTitle}>redux-persist-prototype</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.formGroupView}>
                    {/* フォームブロック */}
                    <View style={styles.formView}>
                        <View style={styles.formLabelView}>
                            <Text style={styles.formLabel}>
                                {"User name"}
                            </Text>
                        </View>
                        <View style={styles.formViewInside}>
                            <TextInput placeholder=" Input your user name." onChangeText={value => this.props.setUserName(value)} style={styles.form} defaultValue={this.props.sampleState.userName} />
                        </View>
                    </View>
                    <View style={styles.formView}>
                        <View style={styles.formLabelView}>
                            <Text style={styles.formLabel}>
                                {"Age"}
                            </Text>
                        </View>
                        <View style={styles.formViewInside}>
                            <TextInput placeholder=" Input your age." onChangeText={value => this.props.setAge(value)} keyboardType="number-pad" style={styles.form} defaultValue={this.props.sampleState.age} />
                        </View>
                    </View>
                    <View style={styles.formView}>
                        <View style={styles.formLabelView}>
                            <Text style={styles.formLabel}>
                                {"Email"}
                            </Text>
                        </View>
                        <View style={styles.formViewInside}>
                            <TextInput placeholder=" Input your email address." onChangeText={value => this.props.setEmail(value)} style={styles.form} defaultValue={this.props.sampleState.email} />
                        </View>
                    </View>
                    <View style={styles.onePercentView} />
                </KeyboardAvoidingView>
                {/* ボタン */}
                <View style={styles.buttonGroupView}>
                    <View style={styles.buttonViewInside}>
                        <Button style={styles.button} onPress={() => this.props.persistor.purge()}>
                            <Text style={styles.buttonText}>Initialize storage</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonViewInside}>
                        <Button style={styles.button} onPress={() => this.props.resetState()}>
                            <Text style={styles.buttonText}>Initialize store</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headerView: {
        height: "20%",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        backgroundColor: "#58B29A"
    },
    headerPadding: {
        flex: 1
    },
    headerTitleView: {
        height: "50%",
        width: "100%",
        justifyContent: "center"
    },
    headerTitle: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: width / 15,
        fontWeight: "bold"
    },
    formGroupView: {
        height: "60%",
        width: "100%"
    },
    formContainer: {
        left: width * 0.1
    },
    formView: {
        height: "33%",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        justifyContent: "center",
        flexDirection: "row"
    },
    formLabelView: {
        width: "30%",
        height: "100%",
        justifyContent: "center",
    },
    formLabel: {
        color: "#3E3E3E",
        alignSelf: "center",
        fontSize: width / 20,
        fontWeight: "bold"
    },
    formViewInside: {
        width: "70%",
        height: "100%",
        justifyContent: "center"
    },
    form: {
        width: "90%",
        height: height / 15,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        borderRadius: 5,
    },
    onePercentView: {
        flex: 1,
        backgroundColor: "#F8F8F7"
    },
    buttonGroupView: {
        flex: 1,
        backgroundColor: "#F8F8F7",
        borderTopWidth: 1,
        borderTopColor: "#F8F8F7"
    },
    buttonViewInside: {
        height: "50%",
        width: "80%",
        alignSelf: "center",
        justifyContent: "center"
    },
    button: {
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        height: "70%",
        backgroundColor: "#EF7D5B",
        borderRadius: 10
    },
    buttonText: {
        alignSelf: "center",
        fontSize: width / 15,
        color: "white",
        fontWeight: "bold",
    }
})

export default connect(sharedState, actions)(Forms);