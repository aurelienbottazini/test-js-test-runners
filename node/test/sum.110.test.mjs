
import sum110 from '../sum110.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 98 to equal 143 + offset 0.5835950500296999', (t) => {
  assert.strictEqual(sum110(45, 98), 143 + 0.5835950500296999);
});
