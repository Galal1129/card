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
  date: '2025-12-27',
  time: '08:24:16 م 12/09/2025',
  clientName: 'علي هادي علي الرازحي',
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
          <svg className="waveSvg" viewBox="0 0 900 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#8B2FB8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3949AB', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="900" height="100" fill="url(#headerGradient)" />
            <path d="M0,70 Q150,50 300,65 T600,65 T900,70 L900,100 L0,100 Z" fill="url(#headerGradient)" opacity="0.3" />
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
              <div className="qrFallback">QR</div>
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
