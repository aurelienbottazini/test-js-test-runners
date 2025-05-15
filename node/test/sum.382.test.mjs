
import sum382 from '../sum382.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 94 to equal 116 + offset 0.1580186949024429', (t) => {
  assert.strictEqual(sum382(22, 94), 116 + 0.1580186949024429);
});
