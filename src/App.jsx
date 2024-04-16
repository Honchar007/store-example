import { useEffect, useState } from 'react'

// components
import StyledButton from './components/StyledButton/StyledButton'
import TrashContainerDeep, { TrashContainerWrapper } from './components/TrashContainerDeep/TrashContainerDeep'
import Checker from './components/Checker/Checker'
import Loading from './components/Loading/Loading'
import VehicleCard from './components/VehicleCard/VehicleCard'
import PinnedOperationBlock from './components/PinnedOperationBlock/PinnedOperationBlock'

// styles
import './App.css'

// api
import CheckGaiApi from './api/check-car'

// constants
const mockCar = {
    "digits": "KA0007AB",
    "vin": null,
    "region": {
        "name": "г. Киев",
        "name_ua": "м. Київ",
        "slug": "kyiv",
        "old_code": "AA",
        "new_code": "KA",
        "new_code_1": "TT",
        "new_code_2": "TA"
    },
    "vendor": "Porsche",
    "model": "PANAMERA",
    "model_year": 2018,
    "photo_url": "https://baza-gai.com.ua/catalog-images/porsche/panamera/II/image.jpg",
    "is_stolen": false,
    "stolen_details": null,
    "operations": [
        {
            "is_last": true,
            "isLast": true,
            "registered_at": "27.06.2018",
            "model_year": 2018,
            "vendor": "Porsche",
            "vendor_slug": "porsche",
            "model": "PANAMERA",
            "operation": {
                "ru": "Первичная регистрация, автосалон, ввезено из-за границы",
                "ua": "Первинна реєстрацiя тз придбаного в торгівельній організації, який ввезено з-за кордону"
            },
            "department": "ТСЦ 8044",
            "color": {
                "slug": "gray",
                "ru": "Серый",
                "ua": "Сірий"
            },
            "is_registered_to_company": false,
            "address": "м.Київ, Голосіївський",
            "koatuu": 8036100000,
            "displacement": 3996,
            "kind": {
                "id": 1,
                "ru": "Легковой",
                "ua": "Легковий",
                "slug": "car"
            },
            "operation_group": {
                "id": 1,
                "ru": "Первичная регистрация",
                "ua": "Первинна реєстрація"
            },
            "fuel": {
                "id": 2,
                "ru": "Бензин",
                "ua": "БЕНЗИН",
                "slug": "petrol"
            },
            "own_weight": 2585,
            "total_weight": 1945
        },
        {
            "is_last": false,
            "isLast": false,
            "registered_at": "11.05.2018",
            "model_year": 2016,
            "vendor": "Mercedes-Benz",
            "vendor_slug": "mercedes-benz",
            "model": "GLS 63 AMG 4 MATIK",
            "operation": {
                "ru": "Перерегистрация, новый собственник, купля-продажа (СГ)",
                "ua": "Перереєстрація на нового власника за дог. купiвлi-продажу (сг)"
            },
            "department": "ТСЦ 8047",
            "color": {
                "slug": "black",
                "ru": "Черный",
                "ua": "Чорний"
            },
            "is_registered_to_company": false,
            "address": "м.Київ, Голосіївський",
            "koatuu": 8036100000,
            "displacement": 5461,
            "kind": {
                "id": 1,
                "ru": "Легковой",
                "ua": "Легковий",
                "slug": "car"
            },
            "operation_group": {
                "id": 2,
                "ru": "Вторичная регистрация",
                "ua": "Вторинна реєстрація"
            },
            "fuel": {
                "id": 2,
                "ru": "Бензин",
                "ua": "БЕНЗИН",
                "slug": "petrol"
            },
            "own_weight": 2260,
            "total_weight": 3250
        }
    ],
    "comments": []
}

function App() {
  const [count, setCount] = useState(0)
  const [year, setYear] = useState(0)
  const [currentCar, setCurrentCar] = useState(null);
  const [pinnedOperation, setPinnedOperation] = useState(null);

  const getCar = async () => {
    // const randomYear = await CheckGaiApi.checkByLicensePlate('KA0007AB');
    setCurrentCar(mockCar);
    // setYear(randomYear.model_year);
    setYear(2018);
  }

  const handlePinOperation = (operation) => {
    console.log(operation)
    setPinnedOperation({...operation});
  }

  useEffect(() => {

    getCar();
  }, [])

  return (
    <>
      <div className='App'>

        <TrashContainerWrapper>
          <PinnedOperationBlock operation={pinnedOperation} removeOperation={setPinnedOperation}/>
        </TrashContainerWrapper>
        <StyledButton
          onClick={() => setCount(count+1)}
        >Збільшити значення count</StyledButton>
        <TrashContainerDeep count={count} />
        <TrashContainerDeep count={year} />
        <TrashContainerWrapper>
          <Checker />
        </TrashContainerWrapper>
        {/* <Loading /> */}
        <TrashContainerWrapper>
          {currentCar && <VehicleCard vehicle={currentCar} pinOperation={handlePinOperation} />}
        </TrashContainerWrapper>
      </div>
    </>
  )
}

export default App
