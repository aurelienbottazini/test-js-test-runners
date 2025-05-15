
import sum1090 from '../sum1090.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 42 to equal 83 + offset 0.09780408298623977', (t) => {
  assert.strictEqual(sum1090(41, 42), 83 + 0.09780408298623977);
});
