
import sum2052 from '../sum2052.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 82 to equal 168 + offset 0.3796699552022602', (t) => {
  assert.strictEqual(sum2052(86, 82), 168 + 0.3796699552022602);
});
