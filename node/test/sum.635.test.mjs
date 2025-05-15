
import sum635 from '../sum635.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 92 to equal 132 + offset 0.2977543815128786', (t) => {
  assert.strictEqual(sum635(40, 92), 132 + 0.2977543815128786);
});
