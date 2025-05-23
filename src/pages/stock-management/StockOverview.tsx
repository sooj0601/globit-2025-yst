import PageTitle from '../../components/PageTitle.tsx'
import UtilLabel from "../../components/ui/UtilLabel.tsx";
import PageUtilLine from "../../components/PageUtilLine.tsx";
import GroupItem from "../../components/modules/GroupItem.tsx";
import Container from "../../layouts/Container.tsx";
import {useState} from "react";
import ModalSetFeed from "./ModalSetFeed.tsx";
import Input from "../../components/ui/Input.tsx";



function StockOverview() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <>
      <PageTitle title="통합 관리" className={'md:mb-8'} />
      <PageUtilLine className="justify-between">
        <div className="flex items-center gap-4 w-56 md:w-auto mx-auto md:mx-0">
          <UtilLabel label="기준일자 선택" className="hidden md:flex"/>
          <input id="date-pick" type="date" className="border-b border-slate-800 grow md:w-56 h-10 px-2" />
        </div>
      </PageUtilLine>
      <PageUtilLine className="mt-6 py-6 border-t border-slate-300">
        <UtilLabel label="입식 그룹"/>
        <div className="flex flex-wrap gap-2">
          <GroupItem key="group-item-1" name="2024-넙치-200030" colorName="violet" />
          <GroupItem key="group-item-2" name="2024-넙치-200030" colorName="lime" />
          <GroupItem key="group-item-3" name="2024-넙치-200030" colorName="yellow" />
          <GroupItem key="group-item-4" name="2024-넙치-200030" colorName="cyan" />
          <GroupItem key="group-item-5" name="2024-넙치-200030" colorName="indigo" />
          <GroupItem key="group-item-6" name="2024-넙치-200030" colorName="teal" />
          <GroupItem key="group-item-7" name="2024-넙치-200030" colorName="pink" />
        </div>
      </PageUtilLine>
      <Container>
        <div className="hidden md:flex items-center h-8 px-4 font-bold bg-slate-600 text-slate-300 rounded-full">
          <p className="text-center flex-1">수조</p>
          <p className="text-center flex-1">평균체중(kg)</p>
          <p className="text-center flex-1">폐사(미)</p>
          <p className="text-center flex-1">실측(미)</p>
          <p className="text-center flex-1">급이량</p>
          <p className="text-center flex-1">기준 급이량(kg)</p>
          <p className="text-center flex-1">이동(분조)미수</p>
          <p className="text-center flex-1">미수</p>
          <p className="text-center flex-1">밀식률(%)</p>
          <p className="text-center flex-1">총중량(kg)</p>
        </div>
        <div className="hidden md:flex items-center px-4 py-2 font-bold bg-slate-100 rounded-2xl">
          <p className="text-center flex-1" onClick={() => setOpenModal("modal1")}>
            <Input type="text" value="A-1" />
          </p>
          <p className="text-center flex-1">
            <Input type="text" value="A-1" disabled />
          </p>
          <p className="text-center flex-1">
            <Input type="text" value="A-1" readonly />
          </p>
          <p className="text-center flex-1">실측(미)</p>
          <p className="text-center flex-1">급이량</p>
          <p className="text-center flex-1">기준 급이량(kg)</p>
          <p className="text-center flex-1">이동(분조)미수</p>
          <p className="text-center flex-1">미수</p>
          <p className="text-center flex-1">밀식률(%)</p>
          <p className="text-center flex-1">총중량(kg)</p>
        </div>
      </Container>
      {/* 표출정보 수정 모달 */}
      <ModalSetFeed
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
      />
    </>
  )
}

export default StockOverview