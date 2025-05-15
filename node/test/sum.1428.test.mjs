
import sum1428 from '../sum1428.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 54 to equal 122 + offset 0.8764840200053939', (t) => {
  assert.strictEqual(sum1428(68, 54), 122 + 0.8764840200053939);
});
