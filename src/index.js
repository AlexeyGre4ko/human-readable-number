module.exports = function toReadable (number) {
 let dg = ['zero','one','two','three','four','five','six','seven','eight','nine'] 
 let tn = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
 let tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
 let th = 'hundred'

 if (number<10)
 return dg [number]

 if (10<=number, number<20)
 return tn [(number-10)]

 if(number===20)
 return tw [0]

 
 if (20<number, number<30)
 return tw [0] + ' ' + dg [(number-20)]

 if(number===30)
 return tw [1]

if (30<number, number<40)
 return tw [1] + ' ' + dg [(number-30)]

 if(number===40)
 return tw [2]
 if (40<number, number<50)
 return tw [2] + ' ' + dg [(number-40)]

 if(number===50)
 return tw [3]
 if (50<number, number<60)
 return tw [3] + ' ' + dg [(number-50)]

 if(number===60)
 return tw [4]
 if (60<number, number<70)
 return tw [4] + ' ' + dg [(number-60)]

 if(number===70)
 return tw [5]
 if (70<number, number<80)
 return tw [5] + ' ' + dg [(number-70)]

 if(number===80)
 return tw [6]
 if (80<number, number<90)
 return tw [6] + ' ' + dg [(number-80)]

 if(number===90)
 return tw [7]
 if (90<number, number<100)
 return tw [7] + ' ' + dg [(number-90)]

 if(number===100)
 return dg [1] + ' ' + th
 if (100<number, number<110)
 return dg [1] + ' ' + th + ' ' + dg [(number-100)]

 if(number===110)
 return dg [1] + ' ' + th + ' ' + tn [0]
 if (110<number, number<120)
 return dg [1] + ' ' + th + ' ' + tn [(number-110)]

 if(number===120)
 return dg [1] + ' ' + th + ' ' + tw [0]
 if (120<number, number<130)
 return dg [1] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-120)]

 if(number===130)
 return dg [1] + ' ' + th + ' ' + tw [1]
 if (130<number, number<140)
 return dg [1] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-130)]

 if(number===140)
 return dg [1] + ' ' + th + ' ' + tw [2]
 if (140<number, number<150)
 return dg [1] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-140)]

 if(number===150)
 return dg [1] + ' ' + th + ' ' + tw [3]
 if (150<number, number<160)
 return dg [1] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-150)]

 if(number===160)
 return dg [1] + ' ' + th + ' ' + tw [4]
 if (160<number, number<170)
 return dg [1] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-160)]

 if(number===170)
 return dg [1] + ' ' + th + ' ' + tw [5]
 if (170<number, number<180)
 return dg [1] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-170)]

 if(number===180)
 return dg [1] + ' ' + th + ' ' + tw [6]
 if (180<number, number<190)
 return dg [1] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-180)]

 if(number===190)
 return dg [1] + ' ' + th + ' ' + tw [7]
 if (190<number, number<200)
 return dg [1] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-190)]

 if(number===200)
 return dg [2] + ' ' + th 
 if (200<number, number<210)
 return dg [2] + ' ' + th + ' ' + dg [(number-200)]

 if(number===210)
 return dg [2] + ' ' + th + ' ' + tn [0]
 if (210<number, number<220)
 return dg [2] + ' ' + th + ' ' + tn [(number-210)]

 if(number===220)
 return dg [2] + ' ' + th + ' ' + tw [0]
 if (220<number, number<230)
 return dg [2] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-220)]

 if(number===230)
 return dg [2] + ' ' + th + ' ' + tw [1]
 if (230<number, number<240)
 return dg [2] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-230)]

 if(number===240)
 return dg [2] + ' ' + th + ' ' + tw [2]
 if (240<number, number<250)
 return dg [2] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-240)]

 if(number===250)
 return dg [2] + ' ' + th + ' ' + tw [3]
 if (250<number, number<260)
 return dg [2] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-250)]

 if(number===260)
 return dg [2] + ' ' + th + ' ' + tw [4]
 if (260<number, number<270)
 return dg [2] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-260)]

 if(number===270)
 return dg [2] + ' ' + th + ' ' + tw [5]
 if (270<number, number<280)
 return dg [2] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-270)]

 if(number===280)
 return dg [2] + ' ' + th + ' ' + tw [6]
 if (280<number, number<290)
 return dg [2] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-280)]

 if(number===290)
 return dg [2] + ' ' + th + ' ' + tw [7]
 if (290<number, number<300)
 return dg [2] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-290)]

 if(number===300)
 return dg [3] + ' ' + th 
 if (300<number, number<310)
 return dg [3] + ' ' + th + ' ' + dg [(number-300)]

 if(number===310)
 return dg [3] + ' ' + th + ' ' + tn [0]
 if (310<number, number<320)
 return dg [3] + ' ' + th + ' ' + tn [(number-310)]

 if(number===320)
 return dg [3] + ' ' + th + ' ' + tw [0]
 if (320<number, number<330)
 return dg [3] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-320)]

 if(number===330)
 return dg [3] + ' ' + th + ' ' + tw [1]
 if (330<number, number<340)
 return dg [3] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-330)]

 if(number===340)
 return dg [3] + ' ' + th + ' ' + tw [2]
 if (340<number, number<350)
 return dg [3] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-340)]


 if(number===350)
 return dg [3] + ' ' + th + ' ' + tw [3]
 if (350<number, number<360)
 return dg [3] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-350)]

 if(number===360)
 return dg [3] + ' ' + th + ' ' + tw [4]
 if (360<number, number<370)
 return dg [3] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-360)]

 if(number===370)
 return dg [3] + ' ' + th + ' ' + tw [5]
 if (370<number, number<380)
 return dg [3] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-370)]

 if(number===380)
 return dg [3] + ' ' + th + ' ' + tw [6]
 if (380<number, number<390)
 return dg [3] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-380)]

 if(number===390)
 return dg [3] + ' ' + th + ' ' + tw [7]
 if (390<number, number<400)
 return dg [3] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-390)]

 if(number===400)
 return dg [4] + ' ' + th 
 if (400<number, number<410)
 return dg [4] + ' ' + th + ' ' + dg [(number-400)]

 if(number===410)
 return dg [4] + ' ' + th + ' ' + tn [0]
 if (410<number, number<420)
 return dg [4] + ' ' + th + ' ' + tn [(number-410)]

 if(number===420)
 return dg [4] + ' ' + th + ' ' + tw [0]
 if (420<number, number<430)
 return dg [4] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-420)]

 if(number===430)
 return dg [4] + ' ' + th + ' ' + tw [1]
 if (430<number, number<440)
 return dg [4] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-430)]

 if(number===440)
 return dg [4] + ' ' + th + ' ' + tw [2]
 if (440<number, number<450)
 return dg [4] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-440)]

 if(number===450)
 return dg [4] + ' ' + th + ' ' + tw [3]
 if (450<number, number<460)
 return dg [4] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-450)]

 if(number===460)
 return dg [4] + ' ' + th + ' ' + tw [4]
 if (460<number, number<470)
 return dg [4] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-460)]

 if(number===470)
 return dg [4] + ' ' + th + ' ' + tw [5]
 if (470<number, number<480)
 return dg [4] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-470)]

 if(number===480)
 return dg [4] + ' ' + th + ' ' + tw [6]
 if (480<number, number<490)
 return dg [4] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-480)]

 if(number===490)
 return dg [4] + ' ' + th + ' ' + tw [7]
 if (490<number, number<500)
 return dg [4] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-490)]

 if(number===500)
 return dg [5] + ' ' + th 
 if (500<number, number<510)
 return dg [5] + ' ' + th + ' ' + dg [(number-500)]

 if(number===510)
 return dg [5] + ' ' + th + ' ' + tn [0]
 if (510<number, number<520)
 return dg [5] + ' ' + th + ' ' + tn [(number-510)]

 if(number===520)
 return dg [5] + ' ' + th + ' ' + tw [0]
 if (520<number, number<530)
 return dg [5] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-520)]

 if(number===530)
 return dg [5] + ' ' + th + ' ' + tw [1]
 if (530<number, number<540)
 return dg [5] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-530)]

 if(number===540)
 return dg [5] + ' ' + th + ' ' + tw [2]
 if (540<number, number<550)
 return dg [5] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-540)]

 if(number===550)
 return dg [5] + ' ' + th + ' ' + tw [3]
 if (550<number, number<560)
 return dg [5] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-550)]

 if(number===560)
 return dg [5] + ' ' + th + ' ' + tw [4]
 if (560<number, number<570)
 return dg [5] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-560)]

 if(number===570)
 return dg [5] + ' ' + th + ' ' + tw [5]
 if (570<number, number<580)
 return dg [5] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-570)]

 if(number===580)
 return dg [5] + ' ' + th + ' ' + tw [6]
 if (580<number, number<590)
 return dg [5] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-580)]

 if(number===590)
 return dg [5] + ' ' + th + ' ' + tw [7]
 if (590<number, number<600)
 return dg [5] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-590)]

 if(number===600)
 return dg [6] + ' ' + th 
 if (600<number, number<610)
 return dg [6] + ' ' + th + ' ' + dg [(number-600)]

 if(number===610)
 return dg [6] + ' ' + th + ' ' + tn [0]
 if (610<number, number<620)
 return dg [6] + ' ' + th + ' ' + tn [(number-610)]

 if(number===620)
 return dg [6] + ' ' + th + ' ' + tw [0]
 if (620<number, number<630)
 return dg [6] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-620)]

 if(number===630)
 return dg [6] + ' ' + th + ' ' + tw [1]
 if (630<number, number<640)
 return dg [6] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-630)]

 if(number===640)
 return dg [6] + ' ' + th + ' ' + tw [2]
 if (640<number, number<650)
 return dg [6] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-640)]

 if(number===650)
 return dg [6] + ' ' + th + ' ' + tw [3]
 if (650<number, number<660)
 return dg [6] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-650)]

 if(number===660)
 return dg [6] + ' ' + th + ' ' + tw [4]
 if (660<number, number<670)
 return dg [6] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-660)]

 if(number===670)
 return dg [6] + ' ' + th + ' ' + tw [5]
 if (670<number, number<680)
 return dg [6] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-670)]

 if(number===680)
 return dg [6] + ' ' + th + ' ' + tw [6]
 if (680<number, number<690)
 return dg [6] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-680)]

 if(number===690)
 return dg [6] + ' ' + th + ' ' + tw [7]
 if (690<number, number<700)
 return dg [6] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-690)]

 if(number===700)
 return dg [7] + ' ' + th 
 if (700<number, number<710)
 return dg [7] + ' ' + th + ' ' + dg [(number-700)]

 if(number===710)
 return dg [7] + ' ' + th + ' ' + tn [0]
 if (710<number, number<720)
 return dg [7] + ' ' + th + ' ' + tn [(number-710)]

 if(number===720)
 return dg [7] + ' ' + th + ' ' + tw [0]
 if (720<number, number<730)
 return dg [7] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-720)]

 if(number===730)
 return dg [7] + ' ' + th + ' ' + tw [1]
 if (730<number, number<740)
 return dg [7] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-730)]

 if(number===740)
 return dg [7] + ' ' + th + ' ' + tw [2]
 if (740<number, number<750)
 return dg [7] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-740)]

 if(number===750)
 return dg [7] + ' ' + th + ' ' + tw [3]
 if (750<number, number<760)
 return dg [7] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-750)]

 if(number===760)
 return dg [7] + ' ' + th + ' ' + tw [4]
 if (760<number, number<770)
 return dg [7] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-760)]

 if(number===770)
 return dg [7] + ' ' + th + ' ' + tw [5]
 if (770<number, number<780)
 return dg [7] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-770)]

 if(number===780)
 return dg [7] + ' ' + th + ' ' + tw [6]
 if (780<number, number<790)
 return dg [7] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-780)]

 if(number===790)
 return dg [7] + ' ' + th + ' ' + tw [7]
 if (790<number, number<800)
 return dg [7] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-790)]

 if(number===800)
 return dg [8] + ' ' + th 
 if (800<number, number<810)
 return dg [8] + ' ' + th + ' ' + dg [(number-800)]

 if(number===810)
 return dg [8] + ' ' + th + ' ' + tn [0]
 if (810<number, number<820)
 return dg [8] + ' ' + th + ' ' + tn [(number-810)]

 if(number===820)
 return dg [8] + ' ' + th + ' ' + tw [0]
 if (820<number, number<830)
 return dg [8] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-820)]

 if(number===830)
 return dg [8] + ' ' + th + ' ' + tw [1]
 if (830<number, number<840)
 return dg [8] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-830)]

 if(number===840)
 return dg [8] + ' ' + th + ' ' + tw [2]
 if (840<number, number<850)
 return dg [8] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-840)]

 if(number===850)
 return dg [8] + ' ' + th + ' ' + tw [3]
 if (850<number, number<860)
 return dg [8] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-850)]

 if(number===860)
 return dg [8] + ' ' + th + ' ' + tw [4]
 if (860<number, number<870)
 return dg [8] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-860)]

 if(number===870)
 return dg [8] + ' ' + th + ' ' + tw [5]
 if (870<number, number<880)
 return dg [8] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-870)]

 if(number===880)
 return dg [8] + ' ' + th + ' ' + tw [6]
 if (880<number, number<890)
 return dg [8] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-880)]

 if(number===890)
 return dg [8] + ' ' + th + ' ' + tw [7]
 if (890<number, number<900)
 return dg [8] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-890)]

 if(number===900)
 return dg [9] + ' ' + th 
 if (900<number, number<910)
 return dg [9] + ' ' + th + ' ' + dg [(number-900)]

 if(number===910)
 return dg [9] + ' ' + th + ' ' + tn [0]
 if (910<number, number<920)
 return dg [9] + ' ' + th + ' ' + tn [(number-910)]

 if(number===920)
 return dg [9] + ' ' + th + ' ' + tw [0]
 if (920<number, number<930)
 return dg [9] + ' ' + th + ' ' + tw [0] + ' ' + dg [(number-920)]

 if(number===930)
 return dg [9] + ' ' + th + ' ' + tw [1]
 if (930<number, number<940)
 return dg [9] + ' ' + th + ' ' + tw [1] + ' ' + dg [(number-930)]

 if(number===940)
 return dg [9] + ' ' + th + ' ' + tw [2]
 if (940<number, number<950)
 return dg [9] + ' ' + th + ' ' + tw [2] + ' ' + dg [(number-940)]

 if(number===950)
 return dg [9] + ' ' + th + ' ' + tw [3]
 if (950<number, number<960)
 return dg [9] + ' ' + th + ' ' + tw [3] + ' ' + dg [(number-950)]

 if(number===960)
 return dg [9] + ' ' + th + ' ' + tw [4]
 if (960<number, number<970)
 return dg [9] + ' ' + th + ' ' + tw [4] + ' ' + dg [(number-960)]

 if(number===970)
 return dg [9] + ' ' + th + ' ' + tw [5]
 if (970<number, number<980)
 return dg [9] + ' ' + th + ' ' + tw [5] + ' ' + dg [(number-970)]

 if(number===980)
 return dg [9] + ' ' + th + ' ' + tw [6]
 if (980<number, number<990)
 return dg [9] + ' ' + th + ' ' + tw [6] + ' ' + dg [(number-980)]

 if(number===990)
 return dg [9] + ' ' + th + ' ' + tw [7]
 if (990<number, number<1000)
 return dg [9] + ' ' + th + ' ' + tw [7] + ' ' + dg [(number-990)]

 }
