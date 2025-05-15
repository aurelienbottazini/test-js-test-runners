
import sum168 from '../sum168.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 85 to equal 126 + offset 0.3838156247736215', (t) => {
  assert.strictEqual(sum168(41, 85), 126 + 0.3838156247736215);
});
