
import sum1999 from '../sum1999.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 98 to equal 183 + offset 0.7631116982980755', (t) => {
  assert.strictEqual(sum1999(85, 98), 183 + 0.7631116982980755);
});
