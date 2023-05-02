import { useState, useEffect } from "react";
import * as Styled from "./main.styled";
import Modal from "./modal/modal";
import MainCharacter from "../../data/mainCharacter";
import { MainType } from "../../type/type";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";
import { v4 as uuidv4 } from "uuid";
import MobileCharacter from "../../data/MobileCharacter";

export default function MainField() {
  const [isMainModalOpen, setIsMainModalOpen] = useState<boolean>(false);
  const [mainData, setMainData] = useState<MainType[]>([]);
  const [userId, setUserId] = useState<number>(0);
  const [mobileData, setMobieData] = useState<MainType[]>([]);
  const mobileSize = useMediaQuery("(max-width: 768px)");

  const getMainData = async () => {
    try {
      const response = await axios.get("/maintest.json");
      const data = await response.data.data;
      setMainData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMainData();
    setMobieData(mainData.slice(0, 4));
  }, []);

  console.log(mobileData);
  return (
    <Styled.Layout>
      {mobileSize ? (
        <Styled.MobileLayout>
          <Styled.MobileMaiBackgroundImg src="./asset/모바일배경.jpg" />
        </Styled.MobileLayout>
      ) : (
        <Styled.BackGroundImg src="./asset/배경.png" />
      )}

      <Styled.MainPlantLayout>
        {mobileSize ? (
          <>
            {mobileData.map((item) => {
              return (
                <>
                  {item?.plants_id === 1 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/씨앗.png"
                        id="plants"
                      />
                    </>
                  ) : item?.plants_id === 2 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/새싹.png"
                        id="plants"
                      />
                    </>
                  ) : item?.plants_id === 3 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/중간새싹.png"
                        id="plants"
                      />
                    </>
                  ) : (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/꽃.png"
                        id="plants"
                      />
                    </>
                  )}
                </>
              );
            })}
          </>
        ) : (
          <>
            {mainData?.map((item) => {
              return (
                <>
                  {item?.plants_id === 1 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/씨앗.png"
                        id="plants"
                      />
                    </>
                  ) : item?.plants_id === 2 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/새싹.png"
                        id="plants"
                      />
                    </>
                  ) : item?.plants_id === 3 ? (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/중간새싹.png"
                        id="plants"
                      />
                    </>
                  ) : (
                    <>
                      <Styled.MainPlantImg
                        key={uuidv4()}
                        src="./asset/꽃.png"
                        id="plants"
                      />
                    </>
                  )}
                </>
              );
            })}
          </>
        )}
      </Styled.MainPlantLayout>

      <Styled.FieldLayOut>
        {mobileSize ? (
          <>
            {MobileCharacter?.map((item) => {
              return (
                <>
                  <Styled.FieldDiv id="item" key={uuidv4()}>
                    <Styled.TitleDiv>
                      <Styled.CharacterImg
                        src={item.img}
                        width="60rem"
                        height="60rem"
                        key={uuidv4()}
                      />

                      <button
                        id="button"
                        key={uuidv4()}
                        onClick={() => {
                          setIsMainModalOpen(!isMainModalOpen);
                          setUserId(item.id);
                        }}
                      >
                        놀러가기
                      </button>
                    </Styled.TitleDiv>
                  </Styled.FieldDiv>
                </>
              );
            })}
          </>
        ) : (
          <>
            {MainCharacter?.map((item) => {
              return (
                <>
                  <Styled.FieldDiv id="item" key={uuidv4()}>
                    <Styled.TitleDiv>
                      <Styled.CharacterImg
                        src={item.img}
                        width="60rem"
                        height="60rem"
                        key={uuidv4()}
                      />

                      <Styled.BtnStyle
                        id="button"
                        key={uuidv4()}
                        onClick={() => {
                          setIsMainModalOpen(!isMainModalOpen);
                          setUserId(item.id);
                        }}
                      >
                        놀러가기
                      </Styled.BtnStyle>
                    </Styled.TitleDiv>
                  </Styled.FieldDiv>
                </>
              );
            })}
          </>
        )}
      </Styled.FieldLayOut>
      {isMainModalOpen ? (
        <Modal
          isMainModalOpen={isMainModalOpen}
          setIsMainModalOpen={setIsMainModalOpen}
          mainData={mainData}
          userId={userId}
        />
      ) : null}
    </Styled.Layout>
  );
}
