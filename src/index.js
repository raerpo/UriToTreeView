import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "./Input";
import Output from "./Output";

import "./styles.css";

class App extends Component {

    constructor() {
        super();
        this.initialMockValue = "%7B%22textDictionary%22%3A%7B%22selectWarrantyTitleText%22%3A%22Garant%C3%ADa%20Extendida%22%2C%22selectWarrantyTooltipText%22%3A%22Este%20servicio%20te%20permite%20extender%20la%20garant%C3%ADa%20de%20tu%20producto%2C%20brind%C3%A1ndole%20cobertura%20total%20por%20costos%20de%20reparaci%C3%B3n%2C%20t%C3%A9cnicos%20especializados%20y%20el%20reemplazo%20por%20uno%20nuevo%20de%20similares%20o%20superiores%20caracter%C3%ADsticas%2C%20en%20caso%20de%20falla.%22%2C%22selectBicycleServiceNoThanksText%22%3A%22No%2C%20gracias%22%2C%22itemsText%22%3A%22items%22%2C%22pleaseChooseText%22%3A%22Por%20favor%20selecciona%22%2C%22selectBicycleServiceCentreText%22%3A%22Lo%20llevar%C3%A9%20a%20un%20Servicio%20T%C3%A9cnico%20%28sin%20costo%29%22%2C%22selectFurnitureServiceNoThanksText%22%3A%22No%2C%20gracias%22%2C%22selectBicycleServiceLocationText%22%3A%22Ver%20ubicaci%C3%B3n%20de%20los%20servicios%20t%C3%A9cnicos%22%2C%22selectFurnitureServiceTitleText%22%3A%22Servicio%20de%20armado%20de%20Muebles%22%2C%22guideText%22%3A%22Guide%22%2C%22productNotAvailable%22%3A%22Lo%20sentimos%2C%20este%20producto%20ya%20no%20se%20encuentra%20disponible.%22%2C%22selectWarrantyNoThanksText%22%3A%22No%2C%20gracias%22%2C%22selectFurnitureServiceTooltipText%22%3A%22Evita%20que%20tus%20muebles%20se%20da%C3%B1en%2C%20deja%20que%20un%20experto%20los%20arme%20por%20ti.%20Por%20eso%2C%20contamos%20con%20un%C2%A0Servicio%20de%20Armado%2C%20al%20que%20puedes%20acceder%20f%C3%A1cilmente.%20%22%2C%22selectBicycleServiceErrorText%22%3A%22Por%20favor%20selecciona%20una%20opci%C3%B3n%22%2C%22selectFurnitureServiceErrorText%22%3A%22Por%20favor%20selecciona%20una%20opci%C3%B3n%22%2C%22selectWarrantyErrorText%22%3A%22Por%20favor%20selecciona%20una%20opci%C3%B3n%22%2C%22selectBicycleServiceTitleText%22%3A%22%C2%BFC%C3%B3mo%20quieres%20recibir%20tu%20bicicleta%3F%22%2C%22subTotalText%22%3A%22Sub%20Total%22%2C%22selectWarrantyTermsTitleText%22%3A%22T%C3%A9rminos%20y%20condiciones%22%2C%22colorText%22%3A%22Color%22%2C%22otherDimensionText%22%3A%22Otra%20faceta%22%2C%22AcumulaPuntosText%22%3A%22CMR%20Puntos%22%2C%22selectBicycleServiceTooltipText%22%3A%22Extended%20information%20about%20the%20bike%20assembly%20option.%22%2C%22productCodeText%22%3A%22C%C3%B3digo%20del%20producto%3A%22%2C%22sizeText%22%3A%22Tama%C3%B1o%22%7D%2C%22componentDomId%22%3A%22fbra_browseMainProduct%22%2C%22controlParameter%22%3A%7B%22enableLowStock%22%3Atrue%2C%22enableBazaarVoice%22%3Atrue%2C%22enableDeliveryOptions%22%3Atrue%2C%22enableOneClick%22%3Afalse%2C%22maxQuantity%22%3A99%2C%22enableCMRInstalment%22%3Atrue%7D%2C%22endPoints%22%3A%7B%22getProductShipping%22%3A%7B%22name%22%3A%22getProductShipping%22%2C%22type%22%3A%22GET%22%2C%22path%22%3A%22%2Frest%2Fmodel%2Ffalabella%2Frest%2Fbrowse%2FBrowseActor%2Fget-product-shipping%22%7D%2C%22getMonthlyInstallments%22%3A%7B%22name%22%3A%22getMonthlyInstallments%22%2C%22type%22%3A%22GET%22%2C%22path%22%3A%22%2Frest%2Fmodel%2Ffalabella%2Frest%2Fbrowse%2FBrowseActor%2Fmonthly-installment%22%7D%2C%22initProductShipping%22%3A%7B%22name%22%3A%22initProductShipping%22%2C%22type%22%3A%22GET%22%2C%22path%22%3A%22%2Frest%2Fmodel%2Ffalabella%2Frest%2Fbrowse%2FBrowseActor%2Finit-product-shipping%22%7D%2C%22initMonthlyInstallments%22%3A%7B%22name%22%3A%22initMonthlyInstallments%22%2C%22type%22%3A%22GET%22%2C%22path%22%3A%22%2Frest%2Fmodel%2Ffalabella%2Frest%2Fbrowse%2FBrowseActor%2Finit-monthly-installment%22%7D%2C%22mediaAssetUrl%22%3A%7B%22name%22%3A%22mediaAssetUrl%22%2C%22type%22%3A%22POST%22%2C%22path%22%3A%22http%3A%2F%2Ffalabella.scene7.com%2Fis%2Fimage%2F%22%7D%7D%2C%22componentType%22%3A%22Browse-Main_Product%22%2C%22state%22%3A%7B%22product%22%3A%7B%22id%22%3A%224807384%22%2C%22displayName%22%3A%22Bloqueador%20Solar%20Gold%20SPF%2015%22%2C%22useImageAtProductLevel%22%3Afalse%2C%22mediaAssetId%22%3A%224807384%22%2C%22brand%22%3A%22Austrialian%20Gold%22%2C%22productType%22%3A1%2C%22socialLinks%22%3A%7B%22hasFacebookShare%22%3Afalse%2C%22hasGooglePlusShare%22%3Afalse%2C%22hasEmailShare%22%3Atrue%2C%22hasPinterestShare%22%3Afalse%2C%22hasWhatsAppShare%22%3Atrue%2C%22hasTwitterShare%22%3Afalse%2C%22whatsAppShare%22%3A%7B%22uri%22%3A%22whatsapp%3A%2F%2Fsend%3Ftext%5Cu003d%7B0%7D%22%2C%22message%22%3A%22Me%20gust%C3%B3%20este%20producto%20Austrialian%20Gold%20Bloqueador%20Solar%20Gold%20SPF%2015.%20%C2%A1Lo%20quiero%21%20http%3A%2F%2Fcl.test4.falabella.com%2Ffalabella-cl%2Fproduct%2F4807384%2FBloqueador-Solar-Gold-SPF-15%22%7D%2C%22emailShare%22%3A%7B%22template%22%3A%22mailto%3A%3Fsubject%5Cu003dMe%20gust%C3%B3%20este%20producto%20Austrialian%20Gold%20Bloqueador%20Solar%20Gold%20SPF%2015.%20%C2%A1Lo%20quiero%21%5Cu0026body%5Cu003dhttp%3A%2F%2Fcl.test4.falabella.com%2Ffalabella-cl%2Fproduct%2F4807384%2FBloqueador-Solar-Gold-SPF-15%22%2C%22subject%22%3A%22Me%20gust%C3%B3%20este%20producto%20Austrialian%20Gold%20Bloqueador%20Solar%20Gold%20SPF%2015.%20%C2%A1Lo%20quiero%21%22%2C%22body%22%3A%22http%3A%2F%2Fcl.test4.falabella.com%2Ffalabella-cl%2Fproduct%2F4807384%2FBloqueador-Solar-Gold-SPF-15%22%7D%2C%22iLikeThisProductText%22%3A%22Me%20gusta%20este%20producto%22%2C%22iWantItText%22%3A%22Lo%20quiero%22%7D%2C%22rating%22%3A0.0%2C%22totalReviews%22%3A0%2C%22installmentInfo%22%3A%7B%22formattedTotalCAE%22%3A%220.00%25%22%2C%22formattedInstallmentAmount%22%3A%22%241.208%22%2C%22formattedInstallmentTotal%22%3A%22%2414.577%22%7D%2C%22skus%22%3A%5B%7B%22skuId%22%3A%224807384%22%2C%22name%22%3A%22PKA.GOLD%20%20237ML%2BACEL%20125ML%22%2C%22mediaAssetId%22%3A%224807384%22%2C%22price%22%3A%5B%7B%22label%22%3A%22Internet%22%2C%22originalPrice%22%3A%2214.490%22%2C%22symbol%22%3A%22%24%22%2C%22type%22%3A3%2C%22isLoyalty%22%3Afalse%7D%2C%7B%22label%22%3A%22CMR%20Puntos%22%2C%22originalPrice%22%3A%2296%22%2C%22type%22%3A14%2C%22isLoyalty%22%3Afalse%7D%5D%2C%22onlineStock%22%3A503%2C%22lowStock%22%3Afalse%2C%22stockAvailable%22%3A503%2C%22isHDAvailable%22%3Atrue%2C%22isCCAvailable%22%3Atrue%7D%5D%7D%7D%7D";
        this.state = {
            contentToDecode: JSON.parse(this.decodeValue(this.initialMockValue))
        };
    }

    decodeValue = input => {
        return decodeURIComponent(input.replace(/\+/g, " "));
    };

    handleInput = evt => {
        const inputValue = evt.target.value;
        this.setState({
            contentToDecode: JSON.parse(this.decodeValue(inputValue))
        });
    };

    render() {
        return (
            <div className="uriToTree">
                <Input
                  onChange={this.handleInput} 
                  initialData={this.initialMockValue} 
                />
                <Output json={this.state.contentToDecode} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
