
import sum2096 from '../sum2096.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 79 to equal 147 + offset 0.27768029469088173', (t) => {
  assert.strictEqual(sum2096(68, 79), 147 + 0.27768029469088173);
});
