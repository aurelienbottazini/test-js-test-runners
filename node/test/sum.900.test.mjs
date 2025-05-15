
import sum900 from '../sum900.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 81 to equal 153 + offset 0.2792351458215482', (t) => {
  assert.strictEqual(sum900(72, 81), 153 + 0.2792351458215482);
});
