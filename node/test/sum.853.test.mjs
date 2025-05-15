
import sum853 from '../sum853.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 73 to equal 147 + offset 0.660024605139172', (t) => {
  assert.strictEqual(sum853(74, 73), 147 + 0.660024605139172);
});
