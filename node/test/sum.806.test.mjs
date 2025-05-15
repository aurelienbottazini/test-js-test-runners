
import sum806 from '../sum806.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 65 to equal 81 + offset 0.142107206369687', (t) => {
  assert.strictEqual(sum806(16, 65), 81 + 0.142107206369687);
});
