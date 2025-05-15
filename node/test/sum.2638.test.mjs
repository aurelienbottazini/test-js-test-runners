
import sum2638 from '../sum2638.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 91 to equal 164 + offset 0.7791413748312987', (t) => {
  assert.strictEqual(sum2638(73, 91), 164 + 0.7791413748312987);
});
