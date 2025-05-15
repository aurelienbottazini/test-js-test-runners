
import sum4771 from '../sum4771.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 48 to equal 98 + offset 0.8059133542032929', (t) => {
  assert.strictEqual(sum4771(50, 48), 98 + 0.8059133542032929);
});
