
import sum244 from '../sum244.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 86 to equal 129 + offset 0.7879338841517672', (t) => {
  assert.strictEqual(sum244(43, 86), 129 + 0.7879338841517672);
});
