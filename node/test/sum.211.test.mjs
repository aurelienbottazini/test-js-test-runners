
import sum211 from '../sum211.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 72 to equal 160 + offset 0.027362748915711554', (t) => {
  assert.strictEqual(sum211(88, 72), 160 + 0.027362748915711554);
});
