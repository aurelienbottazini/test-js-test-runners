
import sum3640 from '../sum3640.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 75 to equal 90 + offset 0.1227278665717112', (t) => {
  assert.strictEqual(sum3640(15, 75), 90 + 0.1227278665717112);
});
