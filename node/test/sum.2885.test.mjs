
import sum2885 from '../sum2885.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 74 to equal 114 + offset 0.5337144209574044', (t) => {
  assert.strictEqual(sum2885(40, 74), 114 + 0.5337144209574044);
});
