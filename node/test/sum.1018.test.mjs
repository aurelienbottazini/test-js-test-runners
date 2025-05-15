
import sum1018 from '../sum1018.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 22 to equal 87 + offset 0.3293196903403899', (t) => {
  assert.strictEqual(sum1018(65, 22), 87 + 0.3293196903403899);
});
