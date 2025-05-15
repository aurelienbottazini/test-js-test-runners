
import sum345 from '../sum345.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 61 to equal 131 + offset 0.5750721374898845', (t) => {
  assert.strictEqual(sum345(70, 61), 131 + 0.5750721374898845);
});
