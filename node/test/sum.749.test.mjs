
import sum749 from '../sum749.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 22 to equal 65 + offset 0.21395854656191526', (t) => {
  assert.strictEqual(sum749(43, 22), 65 + 0.21395854656191526);
});
