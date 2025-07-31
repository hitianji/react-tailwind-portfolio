import { Code, User, Briefcase } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          自己 <span className="text-primary"> 紹介 </span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-1.5xl font-semibold"> 
              初めまして。リー・ティアンジと申します。 </h3>

            <p className="text-muted-foreground">
              二十二歳です。カリフォルニア大学サンタバーバラ校にもう卒業して、 
              学士号を取ったことがありました。現在日立という日本の最もの有名な会社で働いています。 
              日立研究所でAIと、機械学習のような技術を研究しています。来月、電気工学の修士号を取るために、 
              デユーク大学に入学する予定です。将来は、AIと機械学習の分野で、
              日本とアメリカの技術を融合させた新しい技術を開発したいと思っています。 
            </p>

            <p className="text-muted-foreground">
              学歴の以外に、私は一人で西、南、東と北東のアメリカに車で旅行したことがあります。
              また、2025年6月に、 私は一人で19日間、日本の大阪から、豊中、丹波篠山、京都、福知山、宮津、
              京丹後、鳥取、倉吉、米子、松江、そして九州、四国、 伊豆半島と能登半島の
              約４０００マールに運転して旅行しました。旅行家と冒険家だと思います。 サンタバーバラにいる時、
              よくスケートボードで海の近くで遊んでいます。これらの他に、趣味と技能がたくさんあります。 
              後で皆さんに説明します。どうぞよろしくお願いします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact
              </a>

              <a href="/Users/nautilus/Desktop/BEAUTIFUL-PORTFOLIO/public/projects/Tianji's resume (Duke).pdf" className="px-6 py-2 rounded-full border border-primary 
                text-primary hover:bg-primary/10 transition-colors duration-300">
                  {" "}
                  Curriculum Vitae
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications using modern frameworks, 
                    such as React, Next.js, and Angular.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> UI/UX Design </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Project Management </h4>
                  <p className="text-muted-foreground">
                    Learning projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>            
            </div>



          </div>
        </div>
      </div>
        
    </section>
  );
};