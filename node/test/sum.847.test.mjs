
import sum847 from '../sum847.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 44 to equal 82 + offset 0.3184025589486139', (t) => {
  assert.strictEqual(sum847(38, 44), 82 + 0.3184025589486139);
});
