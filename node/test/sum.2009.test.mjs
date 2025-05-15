
import sum2009 from '../sum2009.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 81 to equal 128 + offset 0.14964920850709684', (t) => {
  assert.strictEqual(sum2009(47, 81), 128 + 0.14964920850709684);
});
