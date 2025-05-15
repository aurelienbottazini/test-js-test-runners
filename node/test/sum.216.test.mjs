
import sum216 from '../sum216.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 80 to equal 155 + offset 0.3598758367837849', (t) => {
  assert.strictEqual(sum216(75, 80), 155 + 0.3598758367837849);
});
