import './ReceiptStyles.css';

interface ReceiptData {
  documentNumber: string;
  date: string;
  time: string;
  clientName: string;
  accountNumber: string;
  accountAmount: number;
  accountCurrency: string;
  commission: number;
  commissionCurrency: string;
  total: number;
  amountInWords: string;
  code: string;
  description: string;
  transferNumber: string;
  sender: string;
  receiver: string;
  destination: string;
  publicNumber: string;
}

const sampleData: ReceiptData = {
  documentNumber: '31021',
  date: '2025-09-12',
  time: '08:24:16 م 12/09/2025',
  clientName: 'هشام فؤاد سعيد قاسم الراسي',
  accountNumber: '1231132',
  accountAmount: 400,
  accountCurrency: 'دولار أزرق',
  commission: 400,
  commissionCurrency: 'ريال يمني',
  total: 400,
  amountInWords: 'أربعمائة دولار أزرق لا غير',
  code: '',
  description: '',
  transferNumber: '1126752892',
  sender: 'هشام فؤاد سعيد قاسم الراسي',
  receiver: 'صالح أحمد عبده أحمد عمر',
  destination: 'شبكة الامتياز',
  publicNumber: '1126752892',
};

function App() {
  const data = sampleData;

  return (
    <div className="paper">
      <div className="frame">
        <div className="headerWave">
          <svg className="waveSvg" viewBox="0 0 900 140" preserveAspectRatio="none">
            <path d="M0,0 L0,100 Q150,60 300,80 T600,80 T900,100 L900,0 Z" fill="#7a1ea1" />
          </svg>

          <div className="headerContent">
            <div className="centerSection">
              <div className="companyName">
                <div className="arabicName">الترف</div>
                <div className="arabicName">للتحويلات المالية</div>
                <div className="englishBadge">Al-Taraf Money Transfer</div>
              </div>
            </div>

            <div className="contactBoxesWrapper">
              <div className="contactBox en">
                <div className="contactLine">Yemen - Sana'a</div>
                <div className="contactLine">+967 781 444 721</div>
                <div className="contactLine">+967 730 994 931</div>
              </div>

              <div className="contactBox ar">
                <div className="contactLine">اليمن - صنعاء</div>
                <div className="contactLine">+967781444721</div>
                <div className="contactLine">+967 730 994 931</div>
              </div>
            </div>
          </div>
        </div>

        <div className="topRow3">
          <div className="infoBox">
            <span className="label">رقم المستند:</span>
            <span className="value">{data.documentNumber}</span>
          </div>

          <div className="centerBadge">إرسال حوالة</div>

          <div className="infoBox">
            <span className="label">التاريخ:</span>
            <span className="value">{data.date}</span>
          </div>
        </div>

        <div className="row2">
          <div className="box">
            <div className="value">{data.clientName}</div>
            <div className="label">عميلنا:</div>
          </div>

          <div className="box">
            <div className="value">{data.accountNumber}</div>
            <div className="label">رقم الحساب:</div>
          </div>
        </div>

        <div className="wideNote">
          نود إشعاركم أننا خصمنا من حسابكم لدينا حسب توجيهكم لنا بإرسال حوالة مالية حسب التفاصيل التالية
        </div>

        <div className="grid4">
          <div className="mini">
            <div className="t">مبلغ الحساب</div>
            <div className="v">{data.accountAmount}</div>
          </div>

          <div className="mini">
            <div className="t">عملة الحساب</div>
            <div className="v">{data.accountCurrency}</div>
          </div>

          <div className="mini">
            <div className="t">العمولة</div>
            <div className="v">{data.commission}</div>
            <div className="sub">{data.commissionCurrency}</div>
          </div>

          <div className="mini">
            <div className="t">الإجمالي</div>
            <div className="v">{data.total}</div>
          </div>
        </div>

        <div className="amountWords">{data.amountInWords}</div>

        <div className="sectionLabels">
          <div className="sectionLabel">البيان</div>
          <div className="sectionLabel">الكود</div>
        </div>

        <div className="bottomSection">
          <div className="detailsContainer">
            <div className="details">
              <div>
                <span className="k">رقم الحوالة:</span> <b>{data.transferNumber}</b>
              </div>
              <div>
                <span className="k">المرسل:</span> {data.sender}
              </div>
              <div>
                <span className="k">المستلم:</span> {data.receiver}
              </div>
              <div>
                <span className="k">الجهة:</span> {data.destination}
              </div>
              <div>
                <span className="k">الرقم العام/الرقم العام:</span> <b>{data.publicNumber}</b>
              </div>
            </div>
          </div>

          <div className="qrContainer">
            <div className="qrBox">
              <img
                src="/qr.png"
                alt="QR"
                onError={(e) => {
                  e.currentTarget.insertAdjacentHTML('afterend', '<div class="qrFallback">QR</div>');
                  e.currentTarget.remove();
                }}
              />
            </div>
          </div>
        </div>

        <div className="footerRow">
          <div className="footerPill">هذا الإشعار لا يلا يحتاج ختم أو توقيع</div>
          <div className="footerPill">{data.time}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
