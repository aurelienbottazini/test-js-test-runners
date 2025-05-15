
import sum550 from '../sum550.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 65 to equal 94 + offset 0.529764463594888', (t) => {
  assert.strictEqual(sum550(29, 65), 94 + 0.529764463594888);
});
