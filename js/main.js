var can = document.getElementById('canvas');
						var ctx = can.getContext("2d");
						var clickSwitch = {
							clickSwitchStatus: false,
							ofsY: null,
							ofsX: null,
							passLine: false
						};
						can.onclick = function(e) {
							var ofsY = parseInt((e.offsetY - 5) / 35);
							var ofsX = parseInt((e.offsetX - 5) / 35);
							if (!clickSwitch.clickSwitchStatus) {
								clickSwitch.clickSwitchStatus = true;
								clickOrUnclick({
									ev: e,
									ofsY: ofsY,
									ofsX: ofsX,
								});
								clickSwitch.ofsY = ofsY;
								clickSwitch.ofsX = ofsX;
							} else {
								nowDataMOU({
									ofsY: ofsY,
									ofsX: ofsX,
									clickSwitchOfsY: clickSwitch.ofsY,
									clickSwitchOfsX: clickSwitch.ofsX
								});
								//console.log(clickSwitch);
								if (initDataArr[ofsY][ofsX] === initDataArr[clickSwitch.ofsY][clickSwitch.ofsX] || clickSwitch.passLine) {
									//do
									clickSwitch.passLine = false;
								} else {
									//
									moveData({
										clickSwitchOfsX: clickSwitch.ofsX,
										clickSwitchOfsY: clickSwitch.ofsY,
										ofsY: ofsY,
										ofsX: ofsX,
									})
								};
								setClickStatus({
									IDA: initDataArr,
									ofsY: ofsY,
									ofsX: ofsX,
									statusSe: false,
								});
								clickSwitch.clickSwitchStatus = false;
							};
						};
						// init datedd
						var initDataArr = [
							[
								2, 3, 5, 6, 1, 6, 5, 3, 2
							],
							[
								0, 0, 0, 0, 0, 0, 0, 0, 0
							],
							[
								0, 4, 0, 0, 0, 0, 0, 4, 0
							],
							[
								7, 0, 7, 0, 7, 0, 7, 0, 7
							],
							[
								0, 0, 0, 0, 0, 0, 0, 0, 0
							],
							[
								0, 0, 0, 0, 0, 0, 0, 0, 0
							],
							[
								7, 0, 7, 0, 7, 0, 7, 0, 7
							],
							[
								0, 4, 0, 0, 0, 0, 0, 4, 0
							],
							[
								0, 0, 0, 0, 0, 0, 0, 0, 0
							],
							[
								2, 3, 5, 6, 1, 6, 5, 3, 2
							],
						];
						// drawData
						var drawData = function() {
						var lenSim = initDataArr.length;
						for (var i = 0; i < lenSim; i++) { // console.log(len[i]); var lenSimJ=initDataArr[i].length; for (var j=0;
							j < lenSimJ;
							j++) { //console.log(len[i][j]); //len[i][j].delete=true; initDataArr[i][j]=new
							Number(initDataArr[i][j]);
							initDataArr[i][j].statusSe = false;
							initDataArr[i][j].statusDe = false;
							//console.log(initDataArr[i][j]); if (i==(lenSim - 1) && j==(lenSimJ - 1)) { drawArcAnd(initDataArr); };
						};
						};
						}; // draw Arc and var drawArcAnd=function(od) { var lenSim=od.length; for (var k=0; k < lenSim;
						k++) { // console.log(len[i]); var lenSimJ=od[k].length; for (var l=0; l < lenSimJ; l++) {
							//console.log(len[i][j]); //console.log(len[i][j].StatusSe); if (!initDataArr[k][l].delete) {
							ctx.beginPath();
							ctx.arc(((l * 35) + 15), ((k * 35) + 15), 10, 0, 2 * Math.PI, false);
							ctx.textBaseline = "middle";
							ctx.textAlign = "center";
							switch (initDataArr[k][l].valueOf()) {
								case 1:
									ctx.fillText("将", ((l * 35) +
										15), ((k * 35) + 15));
									break;
								case 2:
									ctx.fillText("车", ((l * 35) + 15), ((k * 35) + 15));
									break;
								case 3:
									ctx.fillText("马", ((l * 35) + 15), ((k * 35) + 15));
									break;
								case 4:
									ctx.fillText("炮", ((l * 35) + 15), ((k *
										35) + 15));
									break;
								case 5:
									ctx.fillText("象", ((l * 35) + 15), ((k * 35) + 15));
									break;
								case 6:
									ctx.fillText("士", ((l * 35) + 15), ((k * 35) + 15));
									break;
								case 7:
									ctx.fillText("卒", ((l * 35) + 15), ((k *
										35) + 15));
									break;
								default:
							};
							ctx.stroke();
						};
						};
						};
						}; // click or unclick var clickOrUnclick=function(o)
						{
							var ofsX = o.ofsX;
							var ofsY = o.ofsY;
							ctx.beginPath();
							ctx.arc(((ofsX * 35) + 15), ((ofsY * 35) + 15), 10,
								0, 2 * Math.PI, false);
							var PsofX = parseInt(o.ev.offsetX);
							var PsofY = parseInt(o.ev.offsetY);
							if (ctx.isPointInPath(PsofX, PsofY)) { //ctx.fillRect(((ofsX * 35)+5),((ofsY * 35)+5),20,20); ctx.stroke();
								ctx.clearRect(((ofsX * 35) + 4), ((ofsY * 35) + 4), 22, 22);
								ctx.beginPath();
								ctx.arc(((ofsX * 35) + 15),
									((ofsY * 35) + 15), 10, 0, 2 * Math.PI, false);
								var oText = initDataArr[ofsY][ofsX];
								ctx.textBaseline = "middle";
								ctx.textAlign = "center";
								switch (initDataArr[ofsY][ofsX].valueOf()) {
									case 1:
										ctx.fillText("将", ((ofsX *
											35) + 15), ((ofsY * 35) + 15));
										break;
									case 2:
										ctx.fillText("车", ((ofsX * 35) + 15), ((ofsY * 35) + 15));
										break;
									case 3:
										ctx.fillText("马", ((ofsX * 35) + 15), ((ofsY * 35) + 15));
										break;
									case 4:
										ctx.fillText("炮",
											((ofsX * 35) + 15), ((ofsY * 35) + 15));
										break;
									case 5:
										ctx.fillText("象", ((ofsX * 35) + 15), ((ofsY * 35) +
											15));
										break;
									case 6:
										ctx.fillText("士", ((ofsX * 35) + 15), ((ofsY * 35) + 15));
										break;
									case 7:
										ctx.fillText("卒", ((ofsX * 35) + 15), ((ofsY * 35) + 15));
										break;
									default:
								};
								ctx.stroke();
								if (oText == 0) {
									clickSwitch.clickSwitchStatus = false;
								} else { // mark now data setClickStatus({ IDA: initDataArr, ofsY:
									ofsY,
									ofsX: ofsX,
									statusSe: true,
								});
						};
						};
						}; // get click status; var getClickStatus=function() {}; //
						set click status;
						var setClickStatus = function(o) { //console.log(o.IDA[o.ofsX][o.ofsY].statusSe);
								//console.log(o.IDA[o.ofsY][o.ofsX].statusSe); if (o.IDA) { o.IDA[o.ofsY][o.ofsX].statusSe=o.statusSe ||
								false;
								o.IDA[o.ofsY][o.ofsX].statusDe = o.statusDe || false; //console.log(o.IDA[o.ofsY][o.ofsX]);
								//console.log(o.IDA[o.ofsY][o.ofsX].statusSe); }; }; // draw var InitDraw=function(o, data) {}; // now
								data move or unMover
								var nowDataMOU = function(o) {
									var ofsX = o.ofsX;
									var ofsY = o.ofsY;
									var clickSwitchOfsY = o.clickSwitchOfsY;
									var clickSwitchOfsX = o.clickSwitchOfsX;
									var dataVal = initDataArr[clickSwitchOfsY][clickSwitchOfsX];
									switch (dataVal.valueOf()) {
										case 2: //var forVal=[]; if (ofsX==clickSwitchOfsX || ofsY==clickSwitchOfsY) { if
											(ofsY == clickSwitchOfsY) {
												var num = ofsX - clickSwitchOfsX; //console.log(num); if (num> 0) {
												for (var i = (clickSwitchOfsX + 1); i < ofsX; i++) { //console.log(i); if (initDataArr[clickSwitchOfsY][i]
													!=
													0) {
													clickSwitch.passLine = true; //console.log(clickSwitch); break; };
													//forVal.push(initDataArr[clickSwitchOfsY][i]); }
													//console.log(initDataArr[clickSwitchOfsY][clickSwitchOfsX]) //console.log(initDataArr[ofsY][ofsX]) }
													else {
														for (var i = (clickSwitchOfsX - 1); i > ofsX; i--) {
															//console.log(num);
															//console.log(parseInt(i));
															if (initDataArr[clickSwitchOfsY][i] != 0) {
																clickSwitch.passLine = true;
																//console.log(clickSwitch);
																break;
															};
														};
													};
												} else {
													var num = ofsY - clickSwitchOfsY;
													//console.log(num);
													if (num > 0) {
														for (var i = (clickSwitchOfsY + 1); i < ofsY; i++) { //console.log(i); if
															(initDataArr[i][clickSwitchOfsX] != 0) {
																clickSwitch.passLine = true; //console.log(clickSwitch); break; };
																//forVal.push(initDataArr[clickSwitchOfsY][i]); }
																//console.log(initDataArr[clickSwitchOfsY][clickSwitchOfsX]) //console.log(initDataArr[ofsY][ofsX]) }
																else {
																	for (var i = (clickSwitchOfsY - 1); i > ofsY; i--) {
																		//console.log(num);
																		//console.log(parseInt(i));
																		if (initDataArr[i][clickSwitchOfsX] != 0) {
																			clickSwitch.passLine = true;
																			//console.log(clickSwitch);
																			break;
																		};
																	};
																};
																//console.log(clickSwitchOfsY+"::"+ofsY);
															}
														} else {
															clickSwitch.passLine = true;
														};
														break;
														case 3:
															if ((clickSwitchOfsY - ofsY) == 2) {
																//console.log("error1");
																//console.log(clickSwitchOfsY - 1);
																//console.log(clickSwitchOfsX);
																if (initDataArr[clickSwitchOfsY - 1][clickSwitchOfsX] != 0) {
																	clickSwitch.passLine = true;
																}
																//console.log(clickSwitchOfsX + "::" + ofsX);
																//console.log(clickSwitchOfsY - ofsY);
															} else if ((clickSwitchOfsY - ofsY) == -2) {
															//console.log("error2");
															//console.log(clickSwitchOfsY + 1);
															//console.log(clickSwitchOfsX);
															if (initDataArr[clickSwitchOfsY + 1][clickSwitchOfsX] != 0) {
																clickSwitch.passLine = true;
															}
														} else if ((clickSwitchOfsX - ofsX) == 2) {
															//console.log("error3");
															//console.log(clickSwitchOfsX - 1);
															//console.log(clickSwitchOfsY);
															if (initDataArr[clickSwitchOfsY][clickSwitchOfsX - 1] != 0) {
																clickSwitch.passLine = true;
															}
															//console.log(3);
														} else if ((clickSwitchOfsX - ofsX) == -2) {
															//console.log("error4");
															//console.log(clickSwitchOfsX + 1);
															//console.log(clickSwitchOfsY);
															if ((initDataArr[clickSwitchOfsY][clickSwitchOfsX + 1]) != 0) {
																clickSwitch.passLine = true;
															}
															//console.log(4);
														} else {
															clickSwitch.passLine = true;
														}
														break;
														case 5:
															var ofsYSet = (ofsY - clickSwitchOfsY) > 0 ? (ofsY - clickSwitchOfsY) : -(ofsY - clickSwitchOfsY);
														var ofsXSet = (ofsX - clickSwitchOfsX) > 0 ? (ofsX - clickSwitchOfsX) : -(ofsX - clickSwitchOfsX);

														if ((ofsY - clickSwitchOfsY) < 0 && (ofsX - clickSwitchOfsX) < 0) {
															if (initDataArr[clickSwitchOfsY -
																	1][clickSwitchOfsX - 1] != 0) clickSwitch.passLine = true; //console.log(); //console.log(clickSwitchOfsY
															+
															":::" + clickSwitchOfsX); //console.log(ofsY + ":::" + ofsX); } else if (((ofsY - clickSwitchOfsY)> 0
														&&
														(ofsX - clickSwitchOfsX) > 0)) {
													if (initDataArr[clickSwitchOfsY + 1][clickSwitchOfsX + 1] != 0) clickSwitch.passLine = true;
												} else if (((ofsY - clickSwitchOfsY) < 0 && (ofsX - clickSwitchOfsX) > 0)) {
													if (initDataArr[clickSwitchOfsY - 1][clickSwitchOfsX + 1] != 0) clickSwitch.passLine = true;
												} else if (((ofsY - clickSwitchOfsY) > 0 && (ofsX - clickSwitchOfsX) < 0)) {
													if (initDataArr[clickSwitchOfsY + 1][clickSwitchOfsX - 1] != 0) clickSwitch.passLine = true;
												}
												if (ofsXSet !=
													2 || ofsYSet != 2) {
													clickSwitch.passLine = true;
												};
												//console.log(initDataArr[clickSwitchOfsY][clickSwitchOfsX]+":::"+clickSwitchOfsY+"::::"+clickSwitchOfsX);
												//console.log(initDataArr[ofsY][ofsX] + "::" +ofsY+"::"+ofsX); break; case 6:
												//console.log(clickSwitch.passLine) if (ofsX> 5 || ofsX < 3) clickSwitch.passLine=true; if
												(clickSwitchOfsY < 3) {
													if (ofsY > 2) {
														clickSwitch.passLine = true;
														//console.log(initDataArr[clickSwitchOfsY][clickSwitchOfsX]+":::"+clickSwitchOfsY+"::::"+clickSwitchOfsX);
														//console.log(initDataArr[ofsY][ofsX] + "::"+ofsY+"::"+ofsX);
													} else {
														//console.log(ofsY != clickSwitchOfsY);
														if (ofsY == clickSwitchOfsY || ofsX == clickSwitchOfsX) {
															clickSwitch.passLine = true;
														}
													};
												} else {
													if (ofsY < 7) {
														clickSwitch.passLine = true;
													} else {
														if (ofsY == clickSwitchOfsY || ofsX == clickSwitchOfsX) {
															clickSwitch.passLine = true;
														}
													};
												};
												break;
												case 1: //console.log(clickSwitch.passLine) if (ofsX> 5
													||
													ofsX < 3) clickSwitch.passLine = true;
											if (clickSwitchOfsY < 3) {
												if (ofsY > 2) {
													clickSwitch.passLine = true;
													//console.log(initDataArr[clickSwitchOfsY][clickSwitchOfsX]+":::"+clickSwitchOfsY+"::::"+clickSwitchOfsX);
													//console.log(initDataArr[ofsY][ofsX] + "::"+ofsY+"::"+ofsX);
												} else {
													//console.log(ofsY != clickSwitchOfsY);
													if (ofsY != clickSwitchOfsY && ofsX != clickSwitchOfsX) {
														clickSwitch.passLine = true;
													}
												};
											} else {
												if (ofsY < 7) {
													clickSwitch.passLine = true;
												} else {
													if (ofsY != clickSwitchOfsY && ofsX != clickSwitchOfsX) {
														clickSwitch.passLine = true;
													}
												};
											};
											break;
										case 4:
											if (ofsX == clickSwitchOfsX || ofsY == clickSwitchOfsY) {
												if (ofsY == clickSwitchOfsY) {
													var num = ofsX - clickSwitchOfsX;
													console.log(initDataArr[ofsY][ofsX]);
													if (initDataArr[ofsY][ofsX] != 0) {};
												} else {}
											} else {
												clickSwitch.passLine = true;
											};
											break;
										default:
											return;
									}
								};
								console.log("test o"); // selectMove
								var moveData = function(o) {
									var ofsX = o.ofsX;
									var ofsY = o.ofsY;
									ctx.clearRect(0, 0, 520, 520);
									initDataArr[o.ofsY][o.ofsX] = initDataArr[o.clickSwitchOfsY][o.clickSwitchOfsX];
									initDataArr[o.clickSwitchOfsY][o.clickSwitchOfsX] = new Number(0);
									drawData();
								};
								drawData();
