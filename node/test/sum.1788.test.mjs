
import sum1788 from '../sum1788.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 71 to equal 127 + offset 0.39924326624758066', (t) => {
  assert.strictEqual(sum1788(56, 71), 127 + 0.39924326624758066);
});
