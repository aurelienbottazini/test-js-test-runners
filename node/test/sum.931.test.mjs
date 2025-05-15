
import sum931 from '../sum931.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 86 to equal 162 + offset 0.05957234722406157', (t) => {
  assert.strictEqual(sum931(76, 86), 162 + 0.05957234722406157);
});
