
import sum2057 from '../sum2057.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 26 to equal 74 + offset 0.1154818710769282', (t) => {
  assert.strictEqual(sum2057(48, 26), 74 + 0.1154818710769282);
});
