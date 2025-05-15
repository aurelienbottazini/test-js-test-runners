
import sum4035 from '../sum4035.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 59 to equal 105 + offset 0.2302261389110094', (t) => {
  assert.strictEqual(sum4035(46, 59), 105 + 0.2302261389110094);
});
