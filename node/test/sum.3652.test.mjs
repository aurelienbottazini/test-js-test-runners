
import sum3652 from '../sum3652.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 78 to equal 164 + offset 0.5374142659881149', (t) => {
  assert.strictEqual(sum3652(86, 78), 164 + 0.5374142659881149);
});
