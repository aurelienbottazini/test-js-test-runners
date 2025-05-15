
import sum117 from '../sum117.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 87 to equal 142 + offset 0.377130872396511', (t) => {
  assert.strictEqual(sum117(55, 87), 142 + 0.377130872396511);
});
