
import sum2724 from '../sum2724.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 87 to equal 149 + offset 0.7181522807026973', (t) => {
  assert.strictEqual(sum2724(62, 87), 149 + 0.7181522807026973);
});
