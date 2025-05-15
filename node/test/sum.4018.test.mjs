
import sum4018 from '../sum4018.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 44 to equal 102 + offset 0.11010658399845208', (t) => {
  assert.strictEqual(sum4018(58, 44), 102 + 0.11010658399845208);
});
