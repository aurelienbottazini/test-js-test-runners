
import sum373 from '../sum373.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 85 to equal 166 + offset 0.9031240857844204', (t) => {
  assert.strictEqual(sum373(81, 85), 166 + 0.9031240857844204);
});
