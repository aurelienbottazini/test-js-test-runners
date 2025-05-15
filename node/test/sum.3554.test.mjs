
import sum3554 from '../sum3554.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 51 to equal 135 + offset 0.019113343661105064', (t) => {
  assert.strictEqual(sum3554(84, 51), 135 + 0.019113343661105064);
});
