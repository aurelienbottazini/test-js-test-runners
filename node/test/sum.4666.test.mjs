
import sum4666 from '../sum4666.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 62 to equal 91 + offset 0.4105544697668201', (t) => {
  assert.strictEqual(sum4666(29, 62), 91 + 0.4105544697668201);
});
