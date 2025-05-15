
import sum2829 from '../sum2829.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 93 to equal 160 + offset 0.641533728724025', (t) => {
  assert.strictEqual(sum2829(67, 93), 160 + 0.641533728724025);
});
