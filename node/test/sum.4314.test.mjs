
import sum4314 from '../sum4314.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 75 to equal 150 + offset 0.6293533859419287', (t) => {
  assert.strictEqual(sum4314(75, 75), 150 + 0.6293533859419287);
});
