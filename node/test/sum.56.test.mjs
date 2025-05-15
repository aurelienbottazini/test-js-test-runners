
import sum56 from '../sum56.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 85 to equal 144 + offset 0.5593658398966398', (t) => {
  assert.strictEqual(sum56(59, 85), 144 + 0.5593658398966398);
});
