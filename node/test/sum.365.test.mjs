
import sum365 from '../sum365.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 28 to equal 36 + offset 0.7015981533651002', (t) => {
  assert.strictEqual(sum365(8, 28), 36 + 0.7015981533651002);
});
