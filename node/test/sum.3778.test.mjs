
import sum3778 from '../sum3778.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 41 to equal 50 + offset 0.2503661147630635', (t) => {
  assert.strictEqual(sum3778(9, 41), 50 + 0.2503661147630635);
});
