
import sum406 from '../sum406.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 15 to equal 40 + offset 0.2900951118456032', (t) => {
  assert.strictEqual(sum406(25, 15), 40 + 0.2900951118456032);
});
